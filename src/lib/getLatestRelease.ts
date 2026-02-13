import axios from "axios";

const EXOGEN_LATEST_RELEASE_API =
  "https://api.github.com/repos/andyngdz/exogen/releases/latest";

interface GitHubLatestReleaseResponse {
  tag_name?: string;
}

export async function getLatestRelease(): Promise<string | undefined> {
  try {
    const response = await axios.get<GitHubLatestReleaseResponse>(
      EXOGEN_LATEST_RELEASE_API,
      {
      headers: {
        Accept: "application/vnd.github+json",
      },
      }
    );

    const data = response.data;

    if (!data.tag_name) {
      return;
    }

    return data.tag_name;
  } catch {
    return;
  }
}
