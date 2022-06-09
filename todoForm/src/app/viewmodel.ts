import { FormModel } from "./model";

export class FormViewModel {

  name: string;
  items: FormModel[];


  constructor() {

    this.name = "Nehraj list"
    this.items =
      [
        new FormModel("Mehraj","Latifli",25,"2022-09-01","../assets/BootstrapIcons/node_modules/bootstrap-icons/icons/person.svg")
      ];

  }
}

