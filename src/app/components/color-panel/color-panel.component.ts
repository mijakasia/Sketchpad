import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// Models
import { Color } from '../../models/color';

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.scss']
})
export class ColorPanelComponent implements OnInit {
  @Output() currentColor: EventEmitter<string> = new EventEmitter<string>();
  @Output() currentRange: EventEmitter<number> = new EventEmitter<number>();

  private colors: Array<Color>;
  private black:  Color;
  private white: Color;
  private dark_grey: Color;
  private light_grey: Color;
  public range: number;

  constructor() {
    this.black = {hexValue: "#000", current: false};
    this.white = {hexValue: "#fff", current: false};
    this.dark_grey = {hexValue: "#848284", current: false};
    this.light_grey = {hexValue: "#c4c2c4", current: false};

    this.colors = [this.black, this.white, this.dark_grey, this.light_grey];
  }
  ngOnInit() {
    this.range = 5;
    this.currentColor.emit(this.black.hexValue);
    this.black.current = true;
    this.currentRange.emit(this.range);
  }

  changeColor(c) {
    this.currentColor.emit(c.hexValue);
    this.colors.forEach((color: Color) => color.current = false);
    const idx = this.colors.indexOf(c);
    this.colors[idx].current = true;
  }

  rangeChange() {
    this.currentRange.emit(this.range);
  }
}

// <div data-color="#c4c2c4"></div>
// <div data-color="#840204"></div>
// <div data-color="#fc0204"></div>
// <div data-color="#848204"></div>
// <div data-color="#fcfe04"></div>
// <div data-color="#048204"></div>
// <div data-color="#04fe04"></div>
// <div data-color="#048284"></div>
// <div data-color="#04fefc"></div>
// <div data-color="#040284"></div>
// <div data-color="#0402fc"></div>
// <div data-color="#840284"></div>
// <div data-color="#fc02fc"></div>
// <div data-color="#848244"></div>
// <div data-color="#fcfe84"></div>
// <div data-color="#044244"></div>
// <div data-color="#04fe84"></div>
// <div data-color="#0582fc"></div>
// <div data-color="#84fefc"></div>
// <div data-color="#044284"></div>
// <div data-color="#8482fc"></div>
// <div data-color="#8402fc"></div>
// <div data-color="#fc0284"></div>
// <div data-color="#844204"></div>
// <div data-color="#fc8244"></div>
