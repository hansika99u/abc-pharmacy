// Items.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Items = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [itemCategory, setItemCategory] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [itemId,setItemId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:9090/items");
      if(response.data){
        setItems(response.data);
      }

    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!itemName || !unitPrice || !itemCategory) {
      alert("Please fill in all fields.");
      return;
    }

    const newItem = {
      name: itemName,
      unit_price: parseFloat(unitPrice),
      item_category:itemCategory,
    };

    try {
      if (editingItem !== null) {
        // Editing existing item
        console.log(editingItem)
        await axios.put(
          `http://localhost:9090/items/${itemId}`,
          newItem
        );
        setItemId(null);
        setEditingItem(null);
      } else {
        // Creating new item
        await axios.post("http://localhost:9090/items", newItem);
      }

      // Refetch items to update the list
      fetchItems();

      // Reset the form
      setItemName("");
      setUnitPrice("");
      setItemCategory("");
    } catch (error) {
      console.error("Error submitting item:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9090/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item)
    setItemName(item.name)
    setItemId(item.id)
    setUnitPrice(item.unit_price)
    setItemCategory(item.item_category)
  };

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "20px" }}>
      <h2
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
          fontFamily: "Georgia, serif",
          textAlign: "left",
          fontSize: "2.5em",
          color: "#333",
          borderBottom: "2px solid #333",
          paddingBottom: "10px",
        }}
      >
        Manage Items
      </h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
          fontFamily: "Georgia, serif",
          textAlign: "left",
        }}
        onSubmit={handleSubmit}
      >
        <label
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <span style={{ marginBottom: "5px", fontSize: "1.2em" }}>Name:</span>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontFamily: "Arial, sans-serif",
            }}
          />
        </label>
  
        <label
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <span style={{ marginBottom: "5px", fontSize: "1.2em" }}>
            Unit Price:
          </span>
          <input
            type="text"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontFamily: "Arial, sans-serif",
            }}
          />
        </label>
  
        <label
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <span style={{ marginBottom: "5px", fontSize: "1.2em" }}>
            Item Category:
          </span>
          <input
            type="text"
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontFamily: "Arial, sans-serif",
            }}
          />
        </label>
  
        <button
          type="submit"
          style={{
            backgroundColor: "green",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "1.2em",
            border: "none",
            marginTop: "20px",
            marginBottom: "20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {editingItem !== null ? "Edit Item" : "Add Item"}
        </button>
      </form>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          fontFamily: "Georgia, serif",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                background: "#3498db",
                color: "#fff",
                padding: "15px",
                textAlign: "center",
                verticalAlign: "middle",
                borderBottom: "2px solid #fff",
                textTransform: "uppercase",
              }}
            >
              Name
            </th>
            <th
              style={{
                background: "#3498db",
                color: "#fff",
                padding: "15px",
                textAlign: "center",
                verticalAlign: "middle",
                borderBottom: "2px solid #fff",
                textTransform: "uppercase",
              }}
            >
              Unit Price
            </th>
            <th
              style={{
                background: "#3498db",
                color: "#fff",
                padding: "15px",
                textAlign: "center",
                verticalAlign: "middle",
                borderBottom: "2px solid #fff",
                textTransform: "uppercase",
              }}
            >
              Category
            </th>
            <th
              style={{
                background: "#3498db",
                color: "#fff",
                padding: "15px",
                textAlign: "center",
                verticalAlign: "middle",
                borderBottom: "2px solid #fff",
                textTransform: "uppercase",
              }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td
                style={{
                  verticalAlign: "middle",
                  textAlign: "center",
                  padding: "10px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  verticalAlign: "middle",
                  textAlign: "center",
                  padding: "10px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                ${item?.unit_price.toFixed(2)}
              </td>
              <td
                style={{
                  verticalAlign: "middle",
                  textAlign: "center",
                  padding: "10px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {item.item_category}
              </td>
              <td>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button
                    onClick={() => handleEdit(item)}
                    style={{
                      backgroundColor: "#3498db",
                      color: "#fff",
                      padding: "10px 15px",
                      fontSize: "1em",
                      border: "none",
                      borderRadius: "5px",
                      marginRight: "10px",
                      cursor: "pointer",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "#fff",
                      padding: "10px 15px",
                      fontSize: "1em",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default Items;
