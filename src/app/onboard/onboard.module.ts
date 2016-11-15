import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './onboard.routing';
import { FormsModule }   from '@angular/forms';

import { OnboardComponent } from './onboard.component';
import { ExplainerComponent } from './components/explainer/explainer.component';
import { TopicsComponent } from './components/topics-container/topics.component';
import { TopicComponent } from './components/topic/topic.component';
import { SignupComponent } from './components/signup-panel/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    OnboardComponent,
    ExplainerComponent,
    TopicsComponent,
    TopicComponent,
    SignupComponent
  ],
  bootstrap: [
    OnboardComponent
  ]
})
export class OnboardModule {}
