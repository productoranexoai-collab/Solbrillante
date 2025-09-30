import { useEffect, useState } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  coverImage: string;
}

export const useBookSearch = (query: string) => {
  const [results, setResults] = useState<Book[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // Mock books data
    const allBooks: Book[] = [
      { id: 1, title: 'El nombre del viento', author: 'Patrick Rothfuss', price: 24.99, coverImage: 'https://picsum.photos/200/300?random=1' },
      { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', price: 19.99, coverImage: 'https://picsum.photos/200/300?random=2' },
      { id: 3, title: 'Dune', author: 'Frank Herbert', price: 22.99, coverImage: 'https://picsum.photos/200/300?random=3' },
      { id: 4, title: 'Crimen y castigo', author: 'Fyodor Dostoevsky', price: 18.5, coverImage: 'https://picsum.photos/200/300?random=4' },
      { id: 5, title: 'El código Da Vinci', author: 'Dan Brown', price: 15.99, coverImage: 'https://picsum.photos/200/300?random=5' },
      { id: 101, title: 'La sombra del viento', author: 'Carlos Ruiz Zafón', price: 21.99, coverImage: 'https://picsum.photos/200/300?random=101' },
      { id: 201, title: 'Cien años de soledad', author: 'Gabriel García Márquez', price: 19.99, coverImage: 'https://picsum.photos/200/300?random=201' },
    ];

    if (query.trim().length < 2) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    // Simulate search delay
    setIsSearching(true);
    const timeoutId = setTimeout(() => {
      const filtered = allBooks.filter((book) => {
        const searchTerm = query.toLowerCase();
        return (
          book.title.toLowerCase().includes(searchTerm) ||
          book.author.toLowerCase().includes(searchTerm)
        );
      });
      setResults(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return { results, isSearching };
};
