// src/components/TaskList.tsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Task {
    id: string;
    text: string;
    completed: boolean;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskText, setNewTaskText] = useState('');

    const handleAddTask = () => {
        if (newTaskText.trim() !== '') {
            const newTask: Task = {
                id: uuidv4(),
                text: newTaskText,
                completed: false,
            };
            setTasks([...tasks, newTask]);
            setNewTaskText('');
        }
    };

    const handleDeleteTask = (taskId: string) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const handleToggleTask = (taskId: string) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task,
            ),
        );
    };

    return (
        <div className="rounded-lg bg-white p-4 shadow-md">
            <h2 className="mb-4 text-lg font-semibold">Quick Notes</h2>
            <div className="mb-4 flex">
                <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Add a new task"
                />
                <button
                    onClick={handleAddTask}
                    className="ml-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Add
                </button>
            </div>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex items-center justify-between rounded-md border p-2 shadow-sm"
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleTask(task.id)}
                                className="mr-2"
                            />
                            <span
                                className={task.completed ? 'line-through' : ''}
                            >
                                {task.text}
                            </span>
                        </div>
                        <button
                            onClick={() => handleDeleteTask(task.id)}
                            className="ml-2 rounded-md bg-red-500 px-2 py-1 text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
