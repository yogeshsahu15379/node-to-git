<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/delicious/template/node/node--testimonial.html.twig */
class __TwigTemplate_06ebe770e0f599d6f1fb341246cc978ad0f045040e1959d1e14aa02e8cb9c3c3 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "
<div class=\"testimonial_section\">
  <div class=\"testimonial_section_image\">  ";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_image", [], "any", false, false, true, 3), 0, [], "any", false, false, true, 3), 3, $this->source), "html", null, true);
        echo " </div>
  <div class=\"testimonial_section_name\">  ";
        // line 4
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "label", [], "any", false, false, true, 4), 4, $this->source), "html", null, true);
        echo " </div>
  <div class=\"testimonial_section_profession\">  ";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field__profession", [], "any", false, false, true, 5), 0, [], "any", false, false, true, 5), 5, $this->source), "html", null, true);
        echo "</div>
  <div id=\"stars\" class=\"ready\"> 
<span class=\"fa fa-star\"></span>
<span class=\"fa fa-star\"></span>
<span class=\"fa fa-star\"></span>
<span class=\"fa fa-star\"></span>
<span class=\"fa fa-star\"></span>

  </div>
   <div class=\"testimonial_dis\"> ";
        // line 14
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "body", [], "any", false, false, true, 14), 14, $this->source), "html", null, true);
        echo "</div>
</div>


";
        // line 18
        $context["rating"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_rating", [], "any", false, false, true, 18), 0, [], "any", false, false, true, 18);
        // line 19
        $context["name"] = twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "label", [], "any", false, false, true, 19);
        // line 20
        echo "

<script>
    star_rating='";
        // line 23
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rating"] ?? null), 23, $this->source), "html", null, true);
        echo "';
    name1='";
        // line 24
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["name"] ?? null), 24, $this->source), "html", null, true);
        echo "';
 </script>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/delicious/template/node/node--testimonial.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  83 => 24,  79 => 23,  74 => 20,  72 => 19,  70 => 18,  63 => 14,  51 => 5,  47 => 4,  43 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("
<div class=\"testimonial_section\">
  <div class=\"testimonial_section_image\">  {{ content.field_image.0 }} </div>
  <div class=\"testimonial_section_name\">  {{ node.label }} </div>
  <div class=\"testimonial_section_profession\">  {{ content.field__profession.0 }}</div>
  <div id=\"stars\" class=\"ready\"> 
<span class=\"fa fa-star\"></span>
<span class=\"fa fa-star\"></span>
<span class=\"fa fa-star\"></span>
<span class=\"fa fa-star\"></span>
<span class=\"fa fa-star\"></span>

  </div>
   <div class=\"testimonial_dis\"> {{ content.body }}</div>
</div>


{% set rating= content.field_rating.0 %}
{% set name= node.label %}


<script>
    star_rating='{{ rating }}';
    name1='{{ name }}';
 </script>
{# <script> print_rating(star_rating,name1);

</script> #}
", "themes/custom/delicious/template/node/node--testimonial.html.twig", "/var/www/html/delicious/web/themes/custom/delicious/template/node/node--testimonial.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 18);
        static $filters = array("escape" => 3);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
