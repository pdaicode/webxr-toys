AFRAME.registerComponent('vr-follow-gain', {
    schema: {
      gain: { type: 'number', default: 20 },       // Default gain is 20.
      followGain: { type: 'number', default: 0.1 } // Default followGain is 0.1.
    },
  
    init: function () {
      this.camera = document.querySelector('a-camera');
      console.log('vr-motion-gain component is initialized.');
      this.lastPosition = new THREE.Vector3();
    },
  
    tick: function (time, timeDelta) {
      var gain = this.data.gain;
      var followGain = this.data.followGain;
  
      if (!this.lastPosition.equals(this.camera.object3D.position)) {
        var positionDelta = this.camera.object3D.position.clone().sub(this.lastPosition);
  
        // Apply the gain to the position difference.
        positionDelta.multiplyScalar(gain * timeDelta / 1000);
  
        // Apply the followGain to the object's position.
        var objectPosition = this.el.object3D.position;
        objectPosition.add(positionDelta.multiplyScalar(followGain));
  
        // Update the lastPosition with the new camera position.
        this.lastPosition.copy(this.camera.object3D.position);
  
        // Log that the gain is being applied.
        console.log('Applying gain');
      }
    },
  
    remove: function () {
      this.camera = null;
      console.log('vr-motion-gain component is removed.');
    }
  });
  