import { Component, OnInit } from '@angular/core';
interface FileData {
  url: string;
  name: string;
  
  }
  const dbName = 'myDatabase';
  const dbVersion = 1;
  const storeName = 'images';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public files: FileData[] = [];
  private db!: IDBDatabase;
  constructor() { }

  ngOnInit() {
    this.openDatabase();
  }

  openDatabase(){
    const request = indexedDB.open(dbName, dbVersion);
    
    request.onupgradeneeded = (event) => {
    this.db = (event.target as IDBOpenDBRequest).result;
    this.db.createObjectStore(storeName, { keyPath: 'name' });
  };
    
    request.onsuccess = (event) => {
    this.db = (event.target as IDBOpenDBRequest).result;
    };
  }

  loadImageFromDevice($event: any) {
    const file = $event.target.files[0];
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = () => {
    // get the data URL of the image:
    let dataURL: string = reader.result as string;
    
    // add the file data to localStorage
    localStorage.setItem(file.name, dataURL);
    
    // add the file data to the array of files
    this.files.push({ url: dataURL, name: file.name });
  };
    
    reader.onerror = (error) => {
    //handle errors
    };
    }
  }
