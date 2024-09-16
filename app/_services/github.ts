"use server";

export async function getRepos() {
  const response = await fetch(
    "https://api.github.com/users/matheusscode/repos",
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios");
  }

  const data = await response.json();
  return data;
}

export async function getProfile() {
  const response = await fetch("https://api.github.com/users/matheusscode");

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios");
  }

  const data = await response.json();

  return data;
}

export async function getGist() {
  const response = await fetch(
    "https://gist.githubusercontent.com/matheusscode/ec8e9d67facc5d4c317bb36211081a79/raw/a832f534f4a473909481776850644eb176fa9d99/settings.json",
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios");
  }

  const gist = await response.text();

  return gist;
}
