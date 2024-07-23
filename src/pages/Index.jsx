import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (task) => {
    setEditingTask({ ...task });
  };

  const saveEdit = () => {
    setTasks(tasks.map(task => task.id === editingTask.id ? editingTask : task));
    setEditingTask(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Todo List</h1>
      <form onSubmit={addTask} className="flex gap-2 mb-8 justify-center">
        <Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          className="max-w-md"
        />
        <Button type="submit">Add Task</Button>
      </form>
      <div className="space-y-4">
        {tasks.map(task => (
          <Card key={task.id} className="max-w-2xl mx-auto">
            <CardContent className="flex items-center justify-between p-4">
              {editingTask && editingTask.id === task.id ? (
                <Input
                  value={editingTask.text}
                  onChange={(e) => setEditingTask({ ...editingTask, text: e.target.value })}
                  className="flex-grow mr-2"
                />
              ) : (
                <span className="flex-grow">{task.text}</span>
              )}
              <div className="flex gap-2">
                {editingTask && editingTask.id === task.id ? (
                  <Button onClick={saveEdit} size="sm">Save</Button>
                ) : (
                  <Button onClick={() => startEditing(task)} size="icon" variant="ghost">
                    <Pencil className="h-4 w-4" />
                  </Button>
                )}
                <Button onClick={() => deleteTask(task.id)} size="icon" variant="ghost">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;