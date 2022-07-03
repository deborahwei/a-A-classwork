require 'action_view'

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    validates :color, inclusion: { in: %w(red orange ginger yellow brown white black grey)}
    validates :sex, inclusion: { in: %w(m M f F)}

    # def age
    #     current_date = Date.now.to_date
    #     time_diff = ((current_date - self.birth_date)//365).to_i
    #     return time_diff 
    #     end
    # end
end
