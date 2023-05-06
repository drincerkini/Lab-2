using System.ComponentModel.DataAnnotations;

namespace SchoolManagmentSystem.Models
{
    public class Course
    {
        [Key]
        [Display(Name = "Number")]
        public int CourseID { get; set; }
        [Required]
        [StringLength(25, MinimumLength = 3)]
        public string? Title { get; set; }
        [Required]
        [Range(0, 12)]
        public int ECTS { get; set; }


    }
}
