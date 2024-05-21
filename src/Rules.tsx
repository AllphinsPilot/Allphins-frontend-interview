const rules = (
  <div>
    {" "}
    <h1>Exercise</h1>{" "}
    <p>
      You need to write a <code>handleClick</code> function that progressively
      colors the cells of a grid in red when the user clicks on a "Color me"
      button.
    </p>{" "}
    <p>
      The grid is composed of 15 x 15 cells, each represented by a{" "}
      <code>div</code> element with a CSS class of <code>cell</code>.
    </p>{" "}
    <p>
      When the user clicks on the "Color me" button, the{" "}
      <code>handleClick</code> function should be called and start coloring the
      whole cells of the grid one by one (you can use a timeout to see the
      coloration evolve)
    </p>
    <p>
      When all cells have been colored, the <code>handleClick</code> function
      should display an alert with the message "Done!".
    </p>
  </div>
);
export default rules;
