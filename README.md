# Relativistic Effects Visualizer

A web application that provides an interactive and visual representation of relativistic effects, such as **Length Contraction** and **Time Dilation**, as explained in the theory of **Special Relativity**. This project is built using **React.js** and leverages the **Chart.js** library for visualizing graphs.

---

## Features

### 1. **Interactive Control Panel**
- Adjust the velocity ratio \((v/c)\) using a slider or numeric input.
- Observe the changes in length contraction and time dilation in real-time.

### 2. **Length Contraction**
- A dynamically contracting rocket illustration is displayed based on the chosen velocity ratio.
- Displays the current **Length Contraction Factor**.

### 3. **Time Dilation**
- A simulated digital clock expands and contracts to demonstrate **Time Dilation**.
- Displays the dilated time corresponding to the chosen velocity ratio.

### 4. **Graph of Relativistic Effects**
- A line chart plots the effects of relativistic velocity on:
  - **Length Contraction (Factor)**
  - **Time Dilation (Seconds)**

### 5. **Concept Explanation Page**
- Detailed explanation of key concepts in **Special Relativity**:
  - Principle of Relativity
  - The constancy of the speed of light
  - Insights into time and space transformation at relativistic speeds.

---

## How It Works

### **Relativistic Equations**
1. **Length Contraction Factor:**
   \[
   L = L_0 \cdot \sqrt{1 - \frac{v^2}{c^2}}
   \]
   Where \(L_0\) is the original length, and \(L\) is the contracted length.

2. **Time Dilation:**
   \[
   \Delta t' = \frac{\Delta t}{\sqrt{1 - \frac{v^2}{c^2}}}
   \]
   Where \(\Delta t\) is the proper time, and \(\Delta t'\) is the dilated time.

### **Visualization**
- **Rocket Image Scaling**: The rocket's width adjusts dynamically based on the length contraction factor.
- **Digital Clock Simulation**: Time dilation is represented visually with an expanding ring animation and a digital clock.

### **Graph Representation**
- Plots the variations in **Length Contraction Factor** and **Time Dilation** as the velocity ratio \((v/c)\) changes from 0 to 0.99.

---

## Project Structure

- **`HomePage.js`**: Main page featuring:
  - Control panel
  - Rocket illustration
  - Time dilation visualization
  - Relativistic effects graph

- **`ConceptPage.js`**: Concept explanation page, detailing principles of **Special Relativity** with examples.

- **Assets**:
  - Rocket and concept images stored in the `assets/images` folder.

---

## Screenshots

### **Home Page**
- Interactive controls for exploring relativistic effects.
- Real-time visualization of **Length Contraction** and **Time Dilation**.

### **Graph**
- A clear depiction of how relativistic velocity affects contraction and dilation.

### **Concept Page**
- Concise, beginner-friendly explanations of key principles of **Special Relativity**.

---

## Technologies Used

- **React.js** for the user interface.
- **Chart.js** for graphing relativistic effects.
- **CSS** for styling and animations.

---

## Purpose

This project is designed to provide an educational tool for learning the fundamental concepts of **Special Relativity**. It aims to bridge the gap between theoretical physics and intuitive understanding through interactive visualizations.
