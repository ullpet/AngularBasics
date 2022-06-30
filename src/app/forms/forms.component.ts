import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../validators/my-validator';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restictedEmails
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      adress: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }

  submit() {
    console.log('Form submitted', this.form)
  }

  setCapital() {
    const cityMap = {
      ru: 'Москва',
      it: 'Рим',
      ge: 'Тбилиси',
      tr: 'Анкара',
      am: 'Ереван'
    }

    
    const cityKey = this.form.get('adress')?.get('country')?.value;
    const city = cityMap[cityKey as keyof typeof cityMap]

    this.form.patchValue({adress : {city : city}})

  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('skills')).push(control)
  }

  getControls() {
    return (<FormArray>this.form.get('skills')).controls
  }
}
