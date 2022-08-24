import fetchIntroSteps from "./fetchIntroSteps";

/**
 * update
 *
 * @api private
 * @method updateIntroForElement
 * @param {Object} targetElm
 * @returns {Boolean} Success or not?
 */
export default function updateSteps(targetElm) {
  // don't start the tour if the instance is not active
  if (!this.isActive()) return;

  //set it to the introJs object
  const steps = fetchIntroSteps.call(this, targetElm);

  if (steps.length === 0) {
    return false;
  }
  this._introItems = steps;

  return true;
}