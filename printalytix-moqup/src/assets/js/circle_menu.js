(function(window) {
  /**
   * FolderFx obj.
   */
  function FolderFx(el) {
    this.DOM = {};
    this.DOM.el = el;
    this.DOM.wrapper = this.DOM.el.querySelector(".circle_menu__icon");
    this.DOM.feedback = this.DOM.el.querySelector(".circle_menu__feedback");
    this.DOM.preview = this.DOM.el.querySelector(".circle_menu__preview");
    this.DOM.previewElems = this.DOM.preview.children;
    this.totalPreview = this.DOM.previewElems.length;

    this._initEvents();
  }

  /**
   * Remove/Stop any animation.
   */
  FolderFx.prototype._removeAnimeTargets = function() {
    anime.remove(this.DOM.preview);
    anime.remove(this.DOM.previewElems);
    anime.remove(this.DOM.wrapper);
    anime.remove(this.DOM.el);
    if (this.DOM.feedback) {
      anime.remove(this.DOM.feedback);
      this.DOM.feedback.style.opacity = 0;
    }
    if (this.DOM.letters) {
      anime.remove(this.DOM.letters);
    }
  };

  FolderFx.prototype._initEvents = function() {
    const self = this;
    this._mouseenterFn = function() {
      self.intimeout = setTimeout(function() {
        self._removeAnimeTargets();
        self._in();
      }, 75);
    };
    this._mouseleaveFn = function() {
      clearTimeout(self.intimeout);
      self._removeAnimeTargets();
      self._out();
    };
    this.DOM.wrapper.addEventListener("mouseenter", this._mouseenterFn);
    this.DOM.wrapper.addEventListener("mouseleave", this._mouseleaveFn);
  };

  FolderFx.prototype._in = function() {
    const self = this;
    [].slice.call(this.DOM.previewElems).forEach(function(el) {
      // Add default behaviour.
      //el.style.opacity = 1;
    });
  };

  FolderFx.prototype._out = function() {
    const self = this;
    [].slice.call(this.DOM.previewElems).forEach(function(el) {
      // Add default behaviour.
      //el.style.opacity = 0;
    });
  };

  /************************************************************************
   * 2: CircleMenuFx.
   ************************************************************************/

  function CircleMenuFx(el) {
    FolderFx.call(this, el);
  }

  CircleMenuFx.prototype = Object.create(FolderFx.prototype);
  CircleMenuFx.prototype.constructor = CircleMenuFx;

  CircleMenuFx.prototype._in = function() {
    const self = this;

    anime({
      targets: this.DOM.previewElems,
      duration: 800,
      delay: function(t, i, c) {
        return (c - i - 1) * 80;
      },
      easing: "easeOutElastic",
      translateY: function(t, i, c) {
        const radius = 250;
        return (
          Math.round(radius * Math.sin((2 * (i + 1) * Math.PI) / c)) + "px"
        );
      },
      translateX: function(t, i, c) {
        const radius = 250;
        return (
          Math.round(radius * Math.cos((2 * (i + 1) * Math.PI) / c)) + "px"
        );
      },
      scale: [0, 1],
      opacity: {
        value: 1,
        duration: 10,
        easing: "linear"
      }
    });
  };

  CircleMenuFx.prototype._out = function() {
    const self = this;

    anime({
      targets: this.DOM.previewElems,
      duration: 300,
      delay: function(t, i, c) {
        return i * 40;
      },
      easing: "easeInBack",
      translateY: 0,
      translateX: 0,
      scale: [1, 0],
      opacity: {
        value: 0,
        duration: 10,
        delay: function(t, i, c) {
          return i * 40 + 300;
        },
        easing: "linear"
      }
    });
  };

  window.CircleMenuFx = CircleMenuFx;
})(window);

// $(document).ready(function() {
//   new CircleMenuFx(document.querySelector(".circle_menu"));
// });
