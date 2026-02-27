import { Component } from '@angular/core';
import { JsonPipe } from '../../../node_modules/@angular/common/types/_common_module-chunk';
import { FormsModule } from '../../../node_modules/@angular/forms/types/forms';

@Component({
  selector: 'app-interpolation',
  imports: [JsonPipe, FormsModule],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  id?: number;
  name?: string | undefined;
  position?: string;
  department?: string;
  details?: string;
  role?: string | undefined;

  title: string = 'Angular Data Binding Demo';
  studentName: string = 'Maria Santos';
  courseCode: string = 'APPDEV1';
  currentYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];
  text: string = "{(expression})"
  curly: string ="1{ }}"
  common: string ="{( userName ))"
  methods: string= "{{ getStatus() }"
  dotnot: string = "{{ user.name }}"
  dotnot2: string = "{{ user?.profile?.email }}"
  jpipe: string ="({ user | json ))"
  isActive: boolean = false;
}

