import React, { useState, useEffect } from 'react';
import Amplify from '@aws-amplify/core';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './src/models';
import awsconfig from './src/aws-exports'
import { constant } from 'async';

const display = []
export default function test() {

const [displayState, updateDisplay] = useState(display);
  useEffect(() => {
    fetchTodo();

    const subscription = DataStore.observe(Todo).subscribe(() => 
    fetchTodo()
    );
    return () => subscription.unsubscribe();
  });

  async function fetchTodo() {
    const displayState = await DataStore.query(Todo)
    updateDisplay(displayState);
  }

  return displayState
}