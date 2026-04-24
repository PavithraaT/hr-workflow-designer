import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: "1",
      data: { label: "Start Node", type: "start" },
      position: { x: 300, y: 200 },
      style: {
        background: "#4CAF50",
        color: "white",
        padding: 10,
        borderRadius: 8,
      },
    },
  ]);

  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  // get live selected node (IMPORTANT FIX)
  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  // CONNECT NODES
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // ADD NODE
  const addNode = (type: string) => {
    let bgColor = "#999";

    if (type === "start") bgColor = "#4CAF50";
    if (type === "task") bgColor = "#2196F3";
    if (type === "approval") bgColor = "#FF9800";
    if (type === "end") bgColor = "#F44336";

    const newNode = {
      id: (nodes.length + 1).toString(),
      data: {
        label: `${type} node`,
        type,
      },
      position: {
        x: Math.random() * 400 + 100,
        y: Math.random() * 300 + 100,
      },
      style: {
        background: bgColor,
        color: "white",
        padding: 10,
        borderRadius: 8,
      },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  // DELETE NODE
  const deleteNode = () => {
    if (!selectedNodeId) return;

    setNodes((nds) => nds.filter((n) => n.id !== selectedNodeId));
    setSelectedNodeId(null);
  };

  // RUN WORKFLOW
  const runWorkflow = () => {
    const hasStart = nodes.some((n) => n.data.type === "start");
    const hasEnd = nodes.some((n) => n.data.type === "end");

    if (!hasStart) return alert("Missing Start Node");
    if (!hasEnd) return alert("Missing End Node");

    const flow = nodes.map((n) => n.data.label).join(" → ");

    alert("Workflow Flow:\n" + flow);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* SIDEBAR */}
      <div style={{ width: 220, padding: 10, borderRight: "1px solid #ccc" }}>
        <h3>Nodes</h3>

        <button onClick={() => addNode("start")}>▶ Start</button>
        <br /><br />

        <button onClick={() => addNode("task")}>➕ Task</button>
        <br /><br />

        <button onClick={() => addNode("approval")}>✅ Approval</button>
        <br /><br />

        <button onClick={() => addNode("end")}>🔚 End</button>

        <hr />

        <button onClick={runWorkflow} disabled={!nodes.length}>
          ▶ Run Workflow
        </button>
      </div>

      {/* CANVAS */}
      <div style={{ flex: 1, height: "100vh" }}>
        <ReactFlow
          style={{ width: "100%", height: "100%" }}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(e, node) => setSelectedNodeId(node.id)}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background />
        </ReactFlow>
      </div>

      {/* EDIT PANEL */}
      <div style={{ width: 300, padding: 10, borderLeft: "1px solid #ccc" }}>
        <h3>Node Editor</h3>

        {selectedNode ? (
          <>
            <label>Label</label>
            <input
              style={{ width: "100%" }}
              value={selectedNode.data.label}
              onChange={(e) => {
                const value = e.target.value;

                setNodes((nds) =>
                  nds.map((n) =>
                    n.id === selectedNodeId
                      ? {
                          ...n,
                          data: {
                            ...n.data,
                            label: value,
                          },
                        }
                      : n
                  )
                );
              }}
            />

            <p>Type: {selectedNode.data.type}</p>

            <button
              onClick={deleteNode}
              style={{
                marginTop: 10,
                background: "red",
                color: "white",
                padding: "5px 10px",
              }}
            >
              Delete Node
            </button>
          </>
        ) : (
          <p>Select a node to edit</p>
        )}
      </div>
    </div>
  );
}