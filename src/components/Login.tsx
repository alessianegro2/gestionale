"use client"

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react"; // libreria icone Lucide 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password}),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/home");
      } else {
        setError(data.message || "Errore nel login");
      }
    } catch (error: Error |any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#465c975d] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <div className="flex justify-center mb-8 border-b-white border-b-2 pb-2">
          <Image
            src="/sanca-logo.jpg"
            alt="Logo"
            width={120}
            height={120}
            className="rounded-full border-3 border-white"
          />
        </div>
        <h1 className="text-2xl font-semibold text-center mb-6">MySanca</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f8ecad]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f8ecad]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 bg-[#fdeb90] hover:bg-[#fdea87] text-black font-semibold py-2 px-4 rounded-xl transition duration-200 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Caricamento...
              </>
            ) : (
              "Accedi"
            )}
          </button>
        </form>

        {/*<p className="text-sm text-center text-gray-500 mt-4">
          Hai dimenticato la password?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Recuperala
          </a>
        </p>*/}
      </div>
    </div>
  );
};

export default Login;
