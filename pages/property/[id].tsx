import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return; // Wait for the ID from the route
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        console.error("Failed to fetch property:", err);
        setError("Failed to fetch property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;

  if (error) return <p className="text-red-500 text-center">{error}</p>;

  if (!property) return <p className="text-center">Property not found</p>;

  return <PropertyDetail property={property} />;
}
