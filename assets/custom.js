(function() {
  var article = document.querySelector('article.markdown');
  var a_list = article ? article.querySelectorAll('a') : null;
  if (!a_list) {
    return;
  }

  a_list.forEach((a) => {
    var href = a.getAttribute('href');
    if (!href) {
      return;
    }

    // in-site anchor
    if (href.startsWith('/') && !href.startsWith('//')) {
      // a.setAttribute('target', '_self');
      return ;
    }

    if (href.startsWith('//') || href.toLowerCase().startsWith('http')) {
      a.setAttribute('target', '_blank');

      var i = document.createElement('i');
      i.className = 'fas fa-external-link-alt my-external-link';
      a.append(i);

      return ;
    }
  });
})();