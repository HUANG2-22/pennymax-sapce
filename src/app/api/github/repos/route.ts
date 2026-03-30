import { lab } from "@/content/lab";

export const revalidate = 3600;

type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string | null;
  pushed_at: string | null;
};

function placeholders(): Repo[] {
  return lab.placeholdersRepos.map((r) => ({
    name: r.name,
    description: r.description,
    language: r.language,
    html_url: null,
    pushed_at: null,
  }));
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const limit = Math.max(
    1,
    Math.min(24, Number(url.searchParams.get("limit") || "6"))
  );

  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    return Response.json({
      ok: false,
      reason: "Missing GITHUB_USERNAME",
      repos: placeholders(),
    });
  }

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
    };
    if (token) headers.Authorization = `Bearer ${token}`;

    const gh = await fetch(
      `https://api.github.com/users/${encodeURIComponent(
        username
      )}/repos?per_page=100&sort=pushed`,
      { headers }
    );

    if (!gh.ok) {
      return Response.json({
        ok: false,
        reason: `GitHub request failed: ${gh.status}`,
        repos: placeholders(),
      });
    }

    const data = (await gh.json()) as Repo[];
    const repos = data
      .slice(0, limit)
      .map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        html_url: r.html_url,
        pushed_at: r.pushed_at,
      }));

    return Response.json({ ok: true, repos });
  } catch (e) {
    return Response.json({
      ok: false,
      reason: e instanceof Error ? e.message : "Unknown error",
      repos: placeholders(),
    });
  }
}

