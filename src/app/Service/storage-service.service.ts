import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // Guardar en localStorage
  setLocal(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Obtener de localStorage
  getLocal<T>(key: string): T | null {
    if (key !== null) {
      const data = localStorage?.getItem(key);
      return data ? JSON.parse(data) : null;
    }
    return null
  }

  // Eliminar de localStorage
  removeLocal(key: string): void {
    localStorage.removeItem(key);
  }

  // Guardar en sessionStorage
  setSession(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  // Obtener de sessionStorage
  getSession<T>(key: string): T | null {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Eliminar de sessionStorage
  removeSession(key: string): void {
    sessionStorage.removeItem(key);
  }

  // Limpiar todos los datos de sessionStorage y localStorage
  clearAll(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
}
