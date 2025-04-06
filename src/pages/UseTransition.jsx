export default function UseTransition() {
  return (
    <div className="useTransition">
      <h1>useTransition</h1>
      <p>
        useTransition is a hook that allows you to mark certain updates as
        "transitions" in React.
      </p>
      <p>
        It is useful for optimizing performance in React applications by
        deferring the rendering of non-urgent updates.
      </p>
      <p>
        For example, if you have a large list of items that need to be rendered,
        you can use useTransition to mark the rendering of the list as a
        transition.
      </p>
    </div>
  );
}
