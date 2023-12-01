const readline = require('readline-sync');

interface Observer {
    update(): void;
  }
  
interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}
  
class Editor implements Subject {
    private observers: Observer[] = [];
    private content: string[] = [];
  
    addObserver(observer: Observer): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer): void {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    notifyObservers(): void {
      this.observers.forEach((observer) => observer.update());
    }
  
    open(): void {
      console.log('Editor is open.');
      this.notifyObservers();
    }
  
    getContent(): string[] {
      return this.content;
    }
  
    setContent(content: string[]): void {
      this.content = content;
    }
}
  
class TextEditor implements Observer {
    private editor: Editor;
  
    constructor(editor: Editor) {
      this.editor = editor;
      this.editor.addObserver(this);
    }
  
    update(): void {
      console.log('TextEditor received notification: Editor is open.');
    }
  
    insertLine(lineNumber: number, text: string): void {
      this.editor.getContent().splice(lineNumber - 1, 0, text);
    }
  
    removeLine(lineNumber: number): void {
      this.editor.getContent().splice(lineNumber - 1, 1);
    }
  
    saveToFile(): void {
      console.log('Saving content to file.');
    }
  
    displayContent(): void {
      console.log('File content:');
      this.editor.getContent().forEach((line, index) => {
        console.log(`${index + 1}: ${line}`);
      });
    }
}
  
const editor = new Editor();
const textEditor = new TextEditor(editor);
  
editor.open();
let lineNumber = 1;
  
while (true) {
    const userInput = readline.question(`Enter text for line ${lineNumber} (or "EOF" to finish): `);
  
    if (userInput.toUpperCase() === 'EOF') {
      break;
    }
  
    textEditor.insertLine(lineNumber, userInput);
    lineNumber++;
}
  
textEditor.saveToFile();
textEditor.displayContent();