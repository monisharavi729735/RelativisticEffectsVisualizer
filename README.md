# Relativistic Effects Visualizer 🚀

**Relativistic Effects Visualizer** is a web application that offers an interactive and visual representation of relativistic effects, such as **Length Contraction** and **Time Dilation**, as described in **Special Relativity**. Built using **React.js**, **Tailwind CSS** and **Chart.js**, this project helps users better understand the behavior of space and time at relativistic speeds through dynamic visualizations.

---

## 🌟 Features

### 1. **Interactive Control Panel**
- Adjust the velocity ratio \(v/c\) using a slider or numeric input.
- Watch real-time changes in **Length Contraction** and **Time Dilation** as the velocity ratio changes.

### 2. **Length Contraction**
- A dynamically contracting rocket illustration is displayed based on the chosen velocity ratio.
- Displays the current **Length Contraction Factor** in real-time.

### 3. **Time Dilation**
- A simulated clock expands and contracts to demonstrate **Time Dilation**.
- Shows the dilated time corresponding to the chosen velocity ratio.

### 4. **Graph of Relativistic Effects**
- A line chart plots the relationship between velocity and the relativistic effects:
  - **Length Contraction (Factor)**
  - **Time Dilation (Seconds)**

### 5. **Concept Explanation Page**
- Detailed educational content explaining key concepts in **Special Relativity**:
  - Principle of Relativity
  - The constancy of the speed of light
  - Time and space transformations at relativistic speeds.

### 6. **Feedback Form**
- A feedback form is included to gather user input and suggestions for improvement.

---

## ⚙️ How It Works

### **Relativistic Equations**

1. **Length Contraction Factor:**
   $L = L_0 \cdot \sqrt{1 - \frac{v^2}{c^2}}$
   Where \(L_0\) is the original length, and \(L\) is the contracted length.

2. **Time Dilation:**
   $\Delta t' = \frac{\Delta t}{\sqrt{1 - \frac{v^2}{c^2}}}$
   Where delta t is the proper time, and delta t' is the dilated time.

### **Visualization**
- **Rocket Image Scaling**: The width of the rocket dynamically adjusts based on the calculated length contraction factor.
- **Clock Simulation**: Time dilation is represented visually through an expanding ring animation, with the dilated time displayed on a clock.

### **Graph Representation**
- A line chart dynamically plots the variations in **Length Contraction Factor** and **Time Dilation** as the velocity ratio \(v/c\) changes from 0 to 0.99.

---

## 📂 Project Structure

### **HomePage.jsx**
- Main page featuring:
  - Control panel for velocity adjustment
  - Rocket illustration for length contraction
  - A clock for time dilation visualization
  - Relativistic effects graph

### **ConceptPage.jsx**
- Explanation page for **Special Relativity** concepts, including:
  - Principle of Relativity
  - Time and space transformations

### **FeedbackPage.jsx**
- Provides a feedback form for user suggestions.

### **Assets**
- Rocket and concept images stored in the `assets/images` folder.

---

## 📸 Screenshots

### **Home Page**
- Interactive controls for exploring relativistic effects.
- Real-time visualizations of **Length Contraction** and **Time Dilation**.

### **Graph**
- Clear depiction of how relativistic velocity affects contraction and dilation.

### **Concept Page**
- Simple, beginner-friendly explanations of the principles of **Special Relativity**.

### **Feedback Page**
- Provides a link to a feedback form for user suggestions.

---

## 🛠️ Technologies Used
- **React.js** for building the user interface.
- **Chart.js** for graphing the relativistic effects.
- **Tailwind CSS** for styling and animations.
- **CSS** for additional custom styles.

---

## 🎯 Purpose
This project is designed as an educational tool to help users intuitively grasp the fundamental concepts of **Special Relativity**. By leveraging interactive visualizations, users can explore how space and time behave under relativistic conditions, making complex physics more accessible and engaging.
