import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter/counter/counter.component";
import { CounterOutputComponent } from "./counter/counter-output/counter-output.component";
import { CounterButtonsComponent } from "./counter/counter-buttons/counter-buttons.component";
import { ButtonModule } from "primeng/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { CustomCounterInputComponent } from "./counter/custom-counter-input/custom-counter-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PostsComponent } from "./posts/posts/posts.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments";
import { appReducer } from "src/app/store/app.state";
import { TableModule } from "primeng/table";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
    PostsComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    FormsModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
