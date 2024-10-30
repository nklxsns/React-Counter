# React Counter App

A React-based counter application where each counter operates independently with custom increment and decrement values. Users can easily add, modify, and delete counters with full control over the step size and direction.

## Features

- **Add Counter**: Create multiple independent counters, each with a user-defined increment/decrement step.
- **Pause/Play**: Control the counting state for each counter individually.
- **Flexible Step Size**: Set custom increment/decrement values for each counter.
- **Toggle Direction**: Switch between incrementing and decrementing at any time.
- **Delete Counter**: Remove counters as needed.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/independent-counter-app.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm start
   ```

The app should now be running at `http://localhost:5173`.

## Usage

1. Enter the desired step value in the input field next to "Add Counter."
2. Click "Add Counter" to create a new counter with that step size.
3. Each counter has controls for:
   - **Pause/Play**: Pausing or resuming the counting process.
   - **Up/Down**: Changing the counting direction.
   - **Delete**: Removing the counter.

## Project Structure

```
.
├── src
│   ├── Counter.js         # Counter component
│   ├── App.js             # Main app component
│   └── App.css            # Custom CSS for the app
└── README.md              # Project documentation
```

## Technologies Used

- **React** - JavaScript library for building the user interface
- **JavaScript** - Functional components and hooks for efficient state management

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.

---
Enjoy using the Flexible Independent Counter App!
```
