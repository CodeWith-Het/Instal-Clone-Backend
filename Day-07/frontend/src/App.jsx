import { useEffect, useState } from "react";
import "./index.scss";

function App() {
  const [menu, setMenu] = useState([]);
  const [form, setForm] = useState({
    item_name: "",
    price: "",
    discount_Price: "",
    image: "",
  });
  const [editId, setEditId] = useState(null);

  const API = "/menu";

  // Fetch data
  const fetchMenu = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setMenu(data.menuItemFetch);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await fetch(`${API}/${editId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setEditId(null);
    } else {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }

    setForm({
      item_name: "",
      price: "",
      discount_Price: "",
      image: "",
    });

    fetchMenu();
  };

  // Delete
  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    fetchMenu();
  };

  // Edit
  const handleEdit = (item) => {
    setForm(item);
    setEditId(item._id);
  };

  return (
    <div className="container">
      <h1>🍽️ Menu Management</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          name="item_name"
          placeholder="Item Name"
          value={form.item_name}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          name="discount_Price"
          placeholder="Discount Price"
          type="number"
          value={form.discount_Price}
          onChange={handleChange}
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <button type="submit">{editId ? "Update Item" : "Add Item"}</button>
      </form>

      {/* MENU LIST */}
      <div className="menu-list">
        {menu.length === 0 ? (
          <p>No items found</p>
        ) : (
          menu.map((item) => (
            <div className="card" key={item._id}>
              <img
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.item_name}
              />

              <h3>{item.item_name}</h3>

              <p className="price">₹{item.price}</p>

              {item.discount_Price && (
                <p className="discount">Discount: ₹{item.discount_Price}</p>
              )}

              <div className="buttons">
                <button className="edit" onClick={() => handleEdit(item)}>
                  ✏️ Edit
                </button>

                <button
                  className="delete"
                  onClick={() => handleDelete(item._id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
