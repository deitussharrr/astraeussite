import React, { useState } from "react";

const Poetry = () => {
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (username === "KK" && password === "Kavin@2025") ||
      (username === "Tusshar" && password === "Teexmoni248")
    ) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    const newPost = e.target.post.value;
    setPosts([...posts, newPost]);
    e.target.post.value = "";
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-5xl font-bold mb-8 text-center">Poetry Blog</h1>
      {!isAuthenticated ? (
        <form onSubmit={handleLogin} className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 bg-white/10 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 bg-white/10 rounded"
          />
          <button type="submit" className="w-full p-2 bg-white text-black rounded">
            Login
          </button>
        </form>
      ) : (
        <div>
          <button onClick={handleLogout} className="mb-4 p-2 bg-white text-black rounded">
            Logout
          </button>
          <form onSubmit={handleAddPost} className="mb-8">
            <textarea
              name="post"
              placeholder="Write your poetry here..."
              className="w-full p-2 bg-white/10 rounded"
              rows={4}
            />
            <button type="submit" className="mt-2 p-2 bg-white text-black rounded">
              Add Post
            </button>
          </form>
          <div>
            {posts.map((post, index) => (
              <div key={index} className="mb-4 p-4 bg-white/10 rounded">
                <p>{post}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Poetry;