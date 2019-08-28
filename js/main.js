function tabs() {
    var wrap = $('.js-tabs');
    if (wrap.length) {
        wrap.each(function () {
            var that = $(this),
            tab = that.find('.js-tabs-link'),
            content = that.find('.js-tabs-content');
            tab.on('click', function (e) {
                e.preventDefault();
                var self = $(this),
                index = self.closest('.js-tabs-link').index();
                $('.js-tabs-link').removeClass('active');
                self.addClass('active');
                content.eq(index).addClass('active').siblings().removeClass('active');
            });
        });
    }
}

tabs();