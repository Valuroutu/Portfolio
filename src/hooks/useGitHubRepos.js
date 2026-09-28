import { useState, useEffect, useCallback } from "react";
import { fetchGitHubRepositories, clearGitHubCache } from "../services/github.js";

export function useGitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function fetchRepos() {
      try {
        const data = await fetchGitHubRepositories(false);
        if (!ignore) {
          setRepos(data);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || "Failed to load repositories");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchRepos();
    return () => {
      ignore = true;
    };
  }, []);

  const refresh = useCallback(async () => {
    clearGitHubCache();
    setLoading(true);
    try {
      const data = await fetchGitHubRepositories(true);
      setRepos(data);
      setError(null);
    } catch (err) {
      setError(err.message || "Failed to load repositories");
    } finally {
      setLoading(false);
    }
  }, []);

  return { repos, loading, error, refresh };
}
