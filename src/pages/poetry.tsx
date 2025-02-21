import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

const Poetry = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const validCredentials = {
    KK: 'Kavin@2025',
    Tusshar: 'Teexmoni248'
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (validCredentials[username as keyof typeof validCredentials] === password) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      const post: BlogPost = {
        id: Date.now().toString(),
        title: newPost.title,
        content: newPost.content,
        author: username,
        date: new Date().toLocaleDateString()
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <button
        onClick={() => navigate('/')}
        className="mb-8 px-4 py-2 glass-card rounded-full hover:bg-white/10 transition-colors"
      >
        ← Back to Home
      </button>

      {!isAuthenticated ? (
        <div className="max-w-md mx-auto glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center font-century-gothic">Poetry Login</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 glass-card rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-century-gothic">Poetry Blog</h2>
          
          {/* New Post Form */}
          <form onSubmit={handleSubmitPost} className="glass-card p-6 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold mb-6">Create New Post</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Content</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 transition-colors h-40"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 glass-card rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Post Poetry
              </button>
            </div>
          </form>

          {/* Posts List */}
          <div className="space-y-8">
            {posts.map((post) => (
              <div key={post.id} className="glass-card p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">By {post.author} • {post.date}</p>
                <p className="whitespace-pre-wrap">{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Poetry;