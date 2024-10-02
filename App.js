/*
 *  Author: Kaleb Jubar
 *  Created: 26 Oct 1985, 4:15:00 AM
 *  Last update: 2 Oct 2024, 12:31:17 PM
 *  Copyright (c) 1985 - 2024 Kaleb Jubar
 */
// native/Expo components
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// React hooks
import { useState } from "react";

// UUID generation
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

// custom components
import Header from "./src/components/Header";
import TaskList from "./src/components/TaskList";

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

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <Header />
            <TaskList tasks={tasks} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#fff",
    },
});
