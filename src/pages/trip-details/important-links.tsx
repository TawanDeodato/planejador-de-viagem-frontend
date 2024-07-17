import { Link2} from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface Links {
    date: string
    id: string;
    title: string;
    url: string;
  }

export function ImportantLinks() {
    const { tripId } = useParams();
  const [links, setLinks] = useState<Links[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links));
  }, [tripId]);

    return (
        <div className="space-y-6">
            {links.map((category) => {
                return(
                    <div key={category.date} className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium texxt-zinc-100">{category.title}</span>
                            <a href={category.url} target="_blank" className="text-xs text-zinc-400 truncate hover:text-zinc-200">
                                {category.url}
                            </a>
                        </div>
                        <Link2 className="text-zinc-400 size-5 shrink-0"/>
                    </div>
                )
            })}
        </div>
    )
}