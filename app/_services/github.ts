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
