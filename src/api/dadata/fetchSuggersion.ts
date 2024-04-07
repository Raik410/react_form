const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio";
const token = import.meta.env.VITE_API_KEY_DADATA as string;

export interface IFetchSuggestions {
  suggestions: Suggestion[];
}

export interface Suggestion {
  value: string;
  unrestricted_value: string;
  data: Data;
}

export interface Data {
  surname?: string;
  name?: string;
  patronymic?: string;
  gender?: string;
  source?: string;
  qc: string;
}

export const fetchSuggestions = async (
  searchText: string,
): Promise<Suggestion[]> => {
  if (!searchText) return [];
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({ query: searchText, count: 3 }),
    });
    if (!response.ok) throw new Error("Я упал fetchSuggestions");
    const data: IFetchSuggestions =
      (await response.json()) as IFetchSuggestions;

    return data.suggestions;
  } catch (error) {
    console.error(error);
    return [];
  }
};
