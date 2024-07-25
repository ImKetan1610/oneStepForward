const [debounceID, setDebounceId] = useState("");

let debounce = () => {
  if (debounceID) {
    return clearInterval(debounceID);
  }

  let id = setTimeout(() => {
    //  function to be executed
  }, 3000);

  setDebounceId(id);
};
