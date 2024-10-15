// Componente en TSX: InstagramFeed.tsx
import { useEffect, useState } from "react";

const InstagramFeed = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      // Reemplaza estos valores con los que obtuviste.
      const token = "49672c3640e5233340c344ea80ca4800"; // Access Token generado
      const userId = "1250689719684022"; // User ID obtenido

      const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink&access_token=${token}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.data) {
          setPosts(data.data);
        } else {
          console.error("Error: No se encontraron publicaciones.");
        }
      } catch (error) {
        console.error("Error fetching Instagram feed:", error);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={post.media_url}
            alt={post.caption || "Instagram Post"}
            className="rounded-lg w-full h-auto object-cover"
          />
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
