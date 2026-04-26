export default function Debouncing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const getSearchResults = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      );
      if (!res.ok) throw new Error("Something went wrong");
      const jsonRes = await res.json();
      setSearchResults(jsonRes?.products);
    } catch (err) {
      console.log("Error in getting results", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchQuery) return;
    const timer = setTimeout(() => {
      getSearchResults();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="search-parent">
      <input
        name="seachBox"
        placeholder="Search the name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading ? (
        <p>Loading......</p>
      ) : (
        <ul>
          {searchResults?.map((ele) => (
            <li>{ele?.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
