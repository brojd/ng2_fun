import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';

import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './components/app/app.component';
import { FuEditorComponent } from './components/fu-editor/fu-editor.component';
import { FuTrainersComponent } from './components/fu-trainers/fu-trainers.component';
import { FuClassesComponent } from './components/fu-classes/fu-classes.component';
import { FuEditFormComponent } from './components/fu-edit-form/fu-edit-form.component';

export { AppComponent };
export const CORE_PROVIDERS = [LoggedInGuard, LoggedOutGuard];
export const CORE_DECLARATIONS = [AboutComponent, MenuComponent, AppComponent, FuEditorComponent, FuTrainersComponent,
    FuClassesComponent, FuEditFormComponent];
