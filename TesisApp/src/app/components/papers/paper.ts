export interface Paper {
  id: number;
  identifier: number;
  source: string;
  title: string;
  abstract: string;
  ce1 :boolean;
  ce2 :boolean;
  ce3 :boolean;
  ce4 :boolean;
  ce5 :boolean;
  ce6 :boolean;
  ce7 :boolean;
  ce8 :boolean;
  lastUpdate : Date;
}


export class PaperDTO implements Paper {

  constructor(){
    this.title ='';
    this.identifier=0;
    this.ce1 = null;
    this.ce2 = null;
    this.ce3 = null;
    this.ce4 = null;
    this.ce5 = null;
    this.ce6 = null;
    this.ce7 = null;
    this.ce8 = null;
  }
  id: number;
  identifier: number;
  source: string;
  title: string;
  abstract: string;
  ce1: boolean;
  ce2: boolean;
  ce3: boolean;
  ce4: boolean;
  ce5: boolean;
  ce6: boolean;
  ce7: boolean;
  ce8: boolean;
  lastUpdate: Date;
}