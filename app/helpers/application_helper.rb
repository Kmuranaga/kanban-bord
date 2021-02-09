module ApplicationHelper
  def history_back_button_tag(url=nil, options={})
    label = options[:label] || I18n.t(:label_back)
    button_tag label, options.merge(class: 'back history-back-btn btn-default-no-gd', type: 'button')
  end
end
