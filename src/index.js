import _ from 'lodash';
import Field from "./Field";
import FieldRenderer from "./FieldRenderer";

import css from "./css/stylesheet.css";

self.f = new Field(0.20, 3);

f.open(1,1);
//f.moveViewTo(1,1);

f.getAll()

self.renderer = new FieldRenderer(f);
