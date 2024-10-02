/*
 *  Author: Kaleb Jubar
 *  Created: 26 Oct 1985, 4:15:00 AM
 *  Last update: 2 Oct 2024, 2:51:10 PM
 *  Copyright (c) 1985 - 2024 Kaleb Jubar
 */
// native/Expo components
import { Alert, Pressable, StyleSheet, View, Text, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

// React hooks
import { useState } from "react";

// UUID generation
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

// custom components
import Header from "./src/components/Header";
import TaskList from "./src/components/TaskList";

import { positiveColor } from "./src/includes/globalStyles";

export default function App() {
    const [tasks, setTasks] = useState([
        {
            id: uuidv4(),   // use UUID library to mimic auto ID generation from database
            title: "Task 1",
            status: false,
        },
        {
            id: uuidv4(),
            title: "Task 2",
            status: true,
        },
        {
            id: uuidv4(),
            title: "Task 3",
            status: false,
        },
    ]);

    /**
     * Get the task with the specified ID.
     * @param {string} taskId ID of task
     * @returns a task object, or undefined if no task has the specified ID
     */
    const getTask = (taskId) => tasks.find((task) => task.id === taskId);

    /**
     * Toggle the completed status of a task.
     * @param {string} taskId ID of task
     */
    const toggleTaskStatus = (taskId) => {
        // make a copy of the task list and pull out this task
        const newTasks = [...tasks];
        const task = newTasks.find((task) => task.id === taskId);

        // if we found one, update it and the list in state
        if (task) {
            task.status = !task.status;
            setTasks(newTasks);
        }
    };

    /**
     * Prompt the user to delete the specified task.
     * @param {string} taskId ID of task
     */
    const deleteTask = (taskId) => {
        /**
         * Actually delete the task.
         */
        const deleteTaskInner = () => {
            const newTasks = tasks.filter((task) => task.id !== taskId);
            setTasks(newTasks);
        };

        Alert.alert(
            "Delete Task?",
            "Are you sure you want to delete this task?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: deleteTaskInner,
                    style: "destructive",
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <Header />
            <TaskList
                tasks={tasks}
                toggleTask={toggleTaskStatus}
                deleteTask={deleteTask}
            />

            <Pressable
                // by using a function, we can apply styles depending on pressed state
                style={({ pressed }) => (
                    [
                        styles.addBtn,
                        pressed ? styles.addBtn.withoutShadow : styles.addBtn.withShadow,
                    ]
                )}
            >
                <Text style={styles.addBtn.caption}>+</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,

        backgroundColor: "#fff",
    },

    addBtn: {
        position: "absolute",
        bottom: Platform.OS === "ios" ? 30 : 15,
        right: 15,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: positiveColor,
        borderRadius: 360,

        withShadow: {
            shadowColor: Platform.OS === "ios" ? "#666" : undefined,
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 3,
        },

        withoutShadow: {
            transform: [
                { translateY: 3, }
            ],
        },

        caption: {
            fontSize: 30,
            fontWeight: "700",
            color: "#FFF",
        },
    },
});
