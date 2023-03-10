import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.css']
})
export class SendMessageFormComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: new FormControl({value: '', disabled: false}),
    email: new FormControl({value: '', disabled: false}),
    text: new FormControl({value: '', disabled: false})
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const {
      name,
      email,
      text,
    } = this.form.getRawValue();

    let payload = {
      name,
      email,
      text,
    }
    console.log(payload)
  }

}
