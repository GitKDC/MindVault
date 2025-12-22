import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Card } from "../components/Card";
import type { ContentType } from "../types/content";

interface Content {
  _id: string;
  title: string;
  link: string;
  type: ContentType;
}

export default function SharePage() {
  const { hash } = useParams();
  const [username, setUsername] = useState("");
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    if(!hash) return ;

    axios
      .get(`${BACKEND_URL}/api/v1/mind/${hash}`)
      .then((res) => {
        setUsername(res.data.username);
        setContents(res.data.content);
      }).catch((err) => {
      console.error("Error loading shared content", err);
    });
  }, [hash]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-6">
          {username}’s MindVault
        </h1>

        {/* Content */}
        <div className="flex flex-wrap gap-4">
          {contents.map(({ _id, type, title, link }) => (
            <Card
              key={_id}
              _id={_id}
              type={type}
              title={title}
              link={link}
              readOnly={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
