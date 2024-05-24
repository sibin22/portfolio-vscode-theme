import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent {
  experiences = [
    {
      company: 'Scrapify Eco-tech Pvt Limited',
      role: 'Full Stack Developer',
      period: 'Mar 2023 - present',
      details: [
        'Engaged in the full lifecycle of software development, from initial requirement gathering and design to deployment and maintenance.',
        'Implemented end-to-end solutions using React, Spring Boot, and MongoDB.',
        'Development of a cross-platform mobile application using React Native.',
        'Rigorously tested the application across different devices and ensured consistent performance and user experience.',
        'Leveraged Docker for containerized environments and utilized AWS services for seamless deployment, minimizing user disruption.',
      ],
      isOpen: true,
    },
    {
      company: 'Trendace Software Solutions',
      role: 'Front End Developer',
      period: 'Nov 2022 - Feb 2023',
      details: [
        'Developed and maintained responsive web applications using HTML, CSS, JavaScript, and Angular.',
        'Integrated RESTful APIs to fetch and display data in real-time, improving user experience.',
        'Implemented and maintained version control using Git, ensuring efficient collaboration among team members.',
      ],
      isOpen: false,
    },
  ];

  toggleDetails(index: number): void {
    this.experiences[index].isOpen = !this.experiences[index].isOpen;
  }
}
