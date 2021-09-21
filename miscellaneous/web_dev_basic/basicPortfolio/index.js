function showHide(shID) {
    if (document.getElementById(shID)) {
      if (document.getElementById(shID + '-show').style.display != 'none') {
        document.getElementById(shID + '-show').style.display = 'none';
        document.getElementById(shID + '-hide').style.display = 'inline';
        document.getElementById(shID).style.height = '100%';
      } else {
        document.getElementById(shID + '-show').style.display = 'inline';
        document.getElementById(shID + '-hide').style.display = 'none';
        document.getElementById(shID).style.height = '0px';
      }
    }
  }